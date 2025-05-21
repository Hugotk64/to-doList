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