document.addEventListener('DOMContentLoaded', function () {
    const jobList = document.getElementById('jobList');
    const applicationForm = document.getElementById('applicationForm');
    const selectedJob = document.getElementById('selectedJob');

    // Sample job vacancies
    const jobs = [
        'Web Developer',
        'Graphic Designer',
        'Marketing Specialist',
        'Data Analyst',
    ];

    // Populate job options in the form
    jobs.forEach(job => {
        const option = document.createElement('option');
        option.value = job;
        option.textContent = job;
        selectedJob.appendChild(option);
    });

    // Populate job vacancies on the page
    jobs.forEach(job => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(job));
        jobList.appendChild(li);
    });

    // Form submission handler
    applicationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const selectedJobValue = selectedJob.value;

        // You can add more logic here, such as sending the form data to a server or displaying a confirmation message.
        alert(`Application submitted!\n\nName: ${name}\nEmail: ${email}\nSelected Job: ${selectedJobValue}`);
    });
});
