// script.js

document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const info = member.querySelector('.member-info');
            info.classList.toggle('visible');
        });
    });
});
