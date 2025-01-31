<!-- JavaScript at the bottom of the page -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Get all carousels
        const carousels = document.querySelectorAll('.carousel');

        // Function to move to the next or previous image
        function moveToImage(carousel, direction) {
            const images = carousel.querySelectorAll('img');
            let currentIndex = Array.from(images).findIndex(image => image.classList.contains('active'));

            // Remove active class from current image
            images[currentIndex].classList.remove('active');

            // Calculate next index
            let newIndex = currentIndex + direction;

            // Wrap around if needed
            if (newIndex >= images.length) newIndex = 0;
            if (newIndex < 0) newIndex = images.length - 1;

            // Add active class to the new image
            images[newIndex].classList.add('active');
        }

        // Set up event listeners for the buttons
        carousels.forEach(carousel => {
            const prevButton = carousel.querySelector('.prev');
            const nextButton = carousel.querySelector('.next');

            prevButton.addEventListener('click', function() {
                moveToImage(carousel, -1); // Move to previous image
            });

            nextButton.addEventListener('click', function() {
                moveToImage(carousel, 1); // Move to next image
            });
        });
    });
</script>
