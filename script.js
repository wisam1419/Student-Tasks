// عند تحميل الصفحة، نتحقق من حفظ الوظائف ونعرضها
document.addEventListener('DOMContentLoaded', () => {
  loadTasks(); // تحميل الوظائف المخزنة عند تحميل الصفحة
});

// وظيفة لتحميل الوظائف من localStorage وعرضها
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // استرجاع الوظائف المخزنة
  const tasksList = document.getElementById('tasks');
  tasksList.innerHTML = ''; // تنظيف القائمة قبل إضافة الوظائف الجديدة

  // عرض الوظائف المخزنة في الصفحة
  tasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
      <span>${task.name} (Sayfa: ${task.dueDate})</span>
    `;
    tasksList.appendChild(taskElement);
  });
}

// دالة لإضافة وظيفة جديدة من الكود
function addTaskFromCode(taskName, dueDate) {
  // استرجاع الوظائف المخزنة من localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // التحقق إذا كانت الوظيفة موجودة مسبقًا
  const taskExists = tasks.some(task => task.name === taskName && task.dueDate === dueDate);

  if (taskExists) {
    console.log('Bu ödev zaten eklenmiş!'); // طباعة تحذير في الكونسول إذا كانت الوظيفة موجودة
    return; // لا تضيف الوظيفة إذا كانت موجودة بالفعل
  }

  // إضافة الوظيفة الجديدة
  const newTask = { name: taskName, dueDate: dueDate };
  tasks.push(newTask);

  // حفظ الوظائف المحدثة في localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // تحديث عرض الوظائف
  loadTasks();
}

// إضافة وظيفة عبر الكود مباشرة (اختياريًا يمكنك تعديل هذه القيم كما تشاء)
addTaskFromCode('Matematik Ödevi', '2024-11-20');  // أضف الوظيفة الأولى
addTaskFromCode('Kimya Ödevi', '2024-11-22');      // أضف الوظيفة الثانية
addTaskFromCode('Türkçe Ödevi', '2024-11-25');     // أضف الوظيفة الثالثة
 // دالة لمسح الوظائف المخزنة في localStorage
function clearTasks() {
  localStorage.removeItem('tasks'); // مسح الوظائف المخزنة
  loadTasks(); // تحديث عرض الوظائف بعد المسح
}

// يمكنك استدعاء هذه الدالة في أي مكان تريده لمسح البيانات المخزنة.
clearTasks(); // هذه السطر سيحذف الوظائف المخزنة ويعرض قائمة فارغة.
addTaskFromCode('mat', '12312')
function clearTasks(