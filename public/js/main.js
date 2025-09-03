// Toggles between "edit mode" and "view mode" for a specific entry.
// When show = true, displays the edit form and hides the title/text/buttons.
// When show = false, hides the edit form and restores the normal view.
function toggleEdit(index, show) {
    $('#edit-form-' + index).toggle(show);
    $('#entry-title-' + index).toggle(!show);
    $('#entry-text-' + index).toggle(!show);
    $('.btn-warning').toggle(!show);
    $('.btn-danger').toggle(!show);
    $('.dropdown').toggle(!show);
}

// Handle edit buttons
// e is event object
// e.target to get button clicked
document.querySelectorAll(".edit-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    toggleEdit(index, true);
  });
});

// Handle cancel buttons
// e is event object
// e.target to get button clicked
document.querySelectorAll(".cancel-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    toggleEdit(index, false);
  });
});