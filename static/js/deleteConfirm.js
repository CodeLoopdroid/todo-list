document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("deleteModal");
    const confirmBtn = document.getElementById("confirmDelete");
    const cancelBtn = document.getElementById("cancelDelete");
    let taskIdToDelete = null;

    // Attach click event to all delete buttons
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            taskIdToDelete = this.getAttribute("data-id");
            modal.style.display = "block";
        });
    });

    // When user confirms deletion
    confirmBtn.addEventListener("click", function() {
        if (taskIdToDelete) {
            window.location.href = `/delete/${taskIdToDelete}`;
        }
    });

    // Cancel button closes the modal
    cancelBtn.addEventListener("click", function() {
        modal.style.display = "none";
        taskIdToDelete = null;
    });

    // Close modal if user clicks outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            taskIdToDelete = null;
        }
    });
});
