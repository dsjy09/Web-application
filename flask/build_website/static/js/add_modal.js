/* Link modal with view button*/

document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.view-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    viewButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        modals[index].style.display = 'block';
      });
    });

    closeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const modal = button.parentNode.parentNode;
        modal.style.display = 'none';
      });
    });

    // Function to close the modal
    function closeModal() {
      modal.style.display = 'none';
    }

    // Close the modal when the user clicks outside the modal content
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };

    // Add event listener to detect mouse movement outside the modal
    window.addEventListener('mousemove', function(event) {
      // Get the modal content element
      const modalContent = document.querySelector('.modal-content');

      // Get the bounding rectangle of the modal content
      const modalRect = modalContent.getBoundingClientRect();

      // Check if the mouse cursor is outside the modal
      if (
        event.clientX < modalRect.left ||
        event.clientX > modalRect.right ||
        event.clientY < modalRect.top ||
        event.clientY > modalRect.bottom
      ) {
        closeModal();
      }
    });

});

