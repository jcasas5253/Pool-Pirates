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
const paginationContainer = document.createElement("div"); // Create pagination container

function createReviewCard(review) {
    const card = document.createElement("div");
    card.classList.add("col", "mb-4", "review-card");
    card.innerHTML = `
    <div class="card cardjs">
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

function displayReview(startIndex) {
    reviewContainer.innerHTML = ""; // Clear existing reviews
    if (startIndex < reviews.length) {
        const reviewCard = createReviewCard(reviews[startIndex]);
        reviewContainer.appendChild(reviewCard);
    }
}

function createPaginationIndicators(numberOfReviews) {
    paginationContainer.innerHTML = ""; // Clear existing indicators
    for (let i = 0; i < numberOfReviews; i++) {
        const indicator = document.createElement("span");
        indicator.classList.add("pagination-indicator");
        indicator.dataset.index = i;
        paginationContainer.appendChild(indicator);
    }
    paginationContainer.querySelector(".pagination-indicator").classList.add("active"); // Set first indicator as active
}

createPaginationIndicators(reviews.length); // Create indicators on load
reviewContainer.parentNode.insertBefore(paginationContainer, reviewContainer.nextSibling); // Add pagination container after reviews

let currentReviewIndex = 0;

function updatePagination(startIndex) {
    const indicators = document.querySelectorAll(".pagination-indicator");
    indicators.forEach((indicator) => indicator.classList.remove("active"));
    indicators[startIndex].classList.add("active");
}

displayReview(currentReviewIndex);
updatePagination(currentReviewIndex);

setInterval(() => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    displayReview(currentReviewIndex);
    updatePagination(currentReviewIndex);
}, 4000); // Change reviews every 4 seconds

// Add styles for pagination indicators (optional)
const styles = document.createElement("style");
styles.innerHTML = `
  .pagination-indicator {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #ddd;
  }
  .pagination-indicator.active {
    background-color: #007bff;
  }
`;
document.head.appendChild(styles);

// Event listener for pagination indicator clicks (optional)
paginationContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("pagination-indicator")) {
        const newIndex = parseInt(target.dataset.index);
        currentReviewIndex = newIndex;
        displayReview(currentReviewIndex);
        updatePagination(currentReviewIndex);
    }
});