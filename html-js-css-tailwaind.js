<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Trending Insights</title>
  <style>
    body {
      @apply font-sans bg-gray-100;
    }

    .container {
      @apply px-4 mx-auto max-w-7xl;
    }

    .hero-bg {
      @apply bg-gradient-to-r from-blue-400 to-purple-600;
    }
  </style>
</head>

<body>
  <!-- Navigation Bar -->
  <nav class="container-fluid bg-gray-800 p-4">
    <div class="container flex justify-between items-center">
      <h1 class="text-white text-3xl">Trending Insights</h1>
      <div>
        <a href="#" class="text-white px-3">News</a>
        <a href="#" class="text-white px-3">Weekly Updates</a>
        <a href="#" class="text-white px-3">Hot Content</a>
        <a href="#" class="text-white px-3">Top Influencer Strategies</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero-bg text-white py-20">
    <div class="container text-center">
      <h2 class="text-4xl font-bold mb-4">Discover What's Trending in May 2024</h2>
      <p class="text-xl mb-8">Stay Ahead with the Latest Insights</p>
      <p class="text-lg">Explore the Hottest Topics in Social Media, Fashion, Technology, and More</p>
      <div class="mt-8">
        <button class="bg-white text-blue-600 font-bold py-2 px-4 rounded">Stay Updated</button>
        <button class="bg-white text-blue-600 font-bold py-2 px-4 rounded ml-4">Join the Conversation</button>
        <button class="bg-white text-blue-600 font-bold py-2 px-4 rounded ml-4">Discover More</button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="container mt-10">
    <!-- Value Propositions -->
    <section>
      <h3 class="text-2xl font-bold mb-4">Comprehensive Insights</h3>
      <p class="mb-4">Get a 360-degree view of what's trending across various sectors including fashion, technology, and
        academics.</p>
      <h3 class="text-2xl font-bold mb-4">Expert Analysis</h3>
      <p class="mb-4">Our team of experts curates and analyzes trends to provide you with actionable insights.</p>
      <h3 class="text-2xl font-bold mb-4">Engaging Content</h3>
      <p class="mb-4">Enjoy engaging and interactive content that keeps you informed and entertained.</p>
      <button class="bg-blue-600 text-white font-bold py-2 px-4 rounded">Explore our in-depth trend reports</button>
    </section>

    <!-- Features -->
    <section class="mt-10">
      <h3 class="text-2xl font-bold mb-4">Features</h3>
      <ul class="list-disc list-inside">
        <li>Daily Updates: Fresh content daily to keep you informed about the latest trends.</li>
        <li>Expert Curated: Insights and analyses from industry experts.</li>
        <li>Interactive Forums: Join discussions and share your thoughts on trending topics.</li>
        <li>Multimedia Content: Videos, podcasts, and articles to suit your preference.</li>
      </ul>
    </section>

    <!-- Success Indicators -->
    <section class="mt-10">
      <h3 class="text-2xl font-bold mb-4">Success Indicators</h3>
      <ul class="list-disc list-inside">
        <li>User Engagement: Over 1 million active users discussing and sharing trends.</li>
        <li>High Retention: 80% of subscribers renew their subscription yearly.</li>
        <li>Top Ranking: Consistently ranked in the top 5 for trend analysis websites.</li>
      </ul>
    </section>

    <!-- Explore Topics -->
    <section class="mt-10">
      <h3 class="text-2xl font-bold mb-4">Explore Topics</h3>
      <ul class="list-disc list-inside">
        <li><a href="#" class="text-blue-600">Hot Topics according to internet today</a></li>
        <li><a href="#" class="text-blue-600">Content geared towards age groups</a></li>
        <li><a href="#" class="text-blue-600">Content geared towards demographics</a></li>
        <li><a href="#" class="text-blue-600">Content geared towards nutrition</a></li>
        <li><a href="#" class="text-blue-600">Content geared to fashion</a></li>
        <li><a href="#" class="text-blue-600">Content geared to academic subjects</a></li>
        <li><a href="#" class="text-blue-600">Highest viewed in shortest time content</a></li>
      </ul>
    </section>

    <!-- Resources -->
    <section class="mt-10">
      <h3 class="text-2xl font-bold mb-4">Resources</h3>
      <ul class="list-disc list-inside">
        <li><a href="#" class="text-blue-600">Hootsuite Social Media Trends 2024</a></li>
        <li><a href="#" class="text-blue-600">Exploding Topics - Top Trending Topics May 2024</a></li>
        <li><a href="#" class="text-blue-600">Slaying Social - TikTok Trends Right Now</a></li>
      </ul>
    </section>
  </main>

  <!-- Footer -->
  <footer class="container mt-20 py-10 border-t">
    <p class="text-center">&copy; 2024 Trending Insights. All rights reserved.</p>
  </footer>

  <!-- Sidebar -->
  <aside class="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg">
    <div class="p-4">
      <h4 class="text-xl font-bold mb-4">Explore Topics</h4>
      <ul class="list-none">
        <li><a href="#" class="block py-2">Hot Topics</a></li>
        <li><a href="#" class="block py-2">Age Groups</a></li>
        <li><a href="#" class="block py-2">Demographics</a></li>
        <li><a href="#" class="block py-2">Nutrition</a></li>
        <li><a href="#" class="block py-2">Fashion</a></li>
        <li><a href="#" class="block py-2">Academic Subjects</a></li>
        <li><a href="#" class="block py-2">Highest Viewed</a></li>
      </ul>
    </div>
  </aside>
</body>

</html>
