const reviews = [
    {
        name: "John Smith",
        rating: 5,
        text: "Pool Pirates did a fantastic job cleaning my pool! They were professional, efficient, and left my pool sparkling clean. I highly recommend them!",
    },
    {
        name: "Jane Doe",
        rating: 5,
        text: "These guys are the best! They went above and beyond to fix a leak in my pool and get everything back in working order.",
    },
    {
        name: "Michael Jones",
        rating: 5,
        text: "Pool Pirates installed a new pool heater for me and did an amazing job. They were on time, courteous, and explained everything clearly. I'm very happy with the results!",
    },
    {
        name: "Sarah Lee",
        rating: 5,
        text: "I can't say enough good things about Pool Pirates. They are always reliable and do a great job. They take the time to answer all my questions and make sure I'm happy with the service. Thank you!",
    },
    {
        name: "David Williams",
        rating: 5,
        text: "Pool Pirates has been maintaining my pool for years now and they are always top-notch. They are professional, responsive, and always do a great job. I highly recommend them!",
    },
];

const reviewContainer = document.querySelector(".reviews");

function createReviewCard(review) {
    const card = document.createElement("div");
    card.classList.add("col", "mb-4", "review-card");
    card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${review.name}</h5>
        <p class="card-text">${review.text}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-warning">
            ${"<i class='bi bi-star-fill'></i>".repeat(review.rating)}
          </span>
        </div>
      </div>
    </div>
  `;
    return card;
}

function displayReviews(startIndex) {
    reviewContainer.innerHTML = ""; // Clear existing reviews
    for (let i = startIndex; i < startIndex + 3; i++) {
        if (i < reviews.length) {
            const reviewCard = createReviewCard(reviews[i]);
            reviewContainer.appendChild(reviewCard);
        }
    }
}

displayReviews(0); // Initially display first 3 reviews

setInterval(() => {
    const currentStartIndex = parseInt(reviewContainer.dataset.startIndex) || 0;
    const nextStartIndex = (currentStartIndex + 1) % reviews.length;
    displayReviews(nextStartIndex);
    reviewContainer.dataset.startIndex = nextStartIndex;
}, 4000); // Change reviews every 4 seconds with a smooth transition
