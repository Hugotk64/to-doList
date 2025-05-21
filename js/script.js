// Creates li or task element for text and icons
function createTaskElement(taskText) {
    const li = $('<li></li>'); // Creates new li
    const textSpan = $('<span class="taskText"></span>').text(taskText); // Show task text
    const iconWrapper = $('<div class="iconWrapper"></div>'); // Icon container
    const checkIcon = $('<span class="icon checkIcon">✔️</span>');
    const deleteIcon = $('<span class="icon deleteIcon">🗑️</span>');

    // Get the icons in the wrapper
    iconWrapper.append(checkIcon,deleteIcon);
    // Get everything in the li
    li.append(textSpan,iconWrapper);

    return li;
}

// Add the task in the ul
function addTask() {
    const taskText = $('#taskInput').val().trim(); // Get and remove spaces from input
    // Handle empty input
    if (taskText !== '') {
        const taskElement = createTaskElement(taskText); // Create new task element
        $('#taskList').append(taskElement); // add to ul
        $('#taskInput').val(''); // Clear text input
    }
}

// Add event handlers 
$('#addTask').on('click', addTask); // When click on add btn

// When press enter
$('#taskInput').on('keypress', function (e) {
    if (e.which === 13) { // Press enter
        addTask();
    }
});

// Toggle icons to mark task as done or undone again
$('#taskList').on('click', '.checkIcon', function () {
    const li = $(this).closest('li'); // Get closest
    const isDone = li.hasClass('done'); // Check if already has .done class
    li.toggleClass('done');
    $(this).text(isDone ? '✔️' : '❌') // Switch icon
});

// Delete task when click trah icon
$('#taskList').on('click', '.deleteIcon', function () {
    $(this).closest('li').fadeOut(300, function () { // Animate fade out
        $(this).remove(); // Remove element
    });
});