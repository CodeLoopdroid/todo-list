document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.task-time').forEach(td => {
        const utcString = td.getAttribute('data-utc');
        const localDate = new Date(utcString + 'Z'); 
        td.textContent = localDate.toLocaleString();
    });
});
