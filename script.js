<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golf Brands Directory</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Golf Brands Directory</h1>
        <div class="filters">
            <select id="brandFilter">
                <option value="">All Brands</option>
            </select>
            <select id="clubTypeFilter">
                <option value="">All Club Types</option>
            </select>
        </div>
    </header>

    <main id="brandsContainer">
        <!-- Brands will be dynamically loaded here -->
    </main>

    <!-- Initialize golfData object -->
    <script>window.golfData = {};</script>

    <!-- Load brand data files -->
    <script src="data/clubs.js"></script>
    <script src="brands/cobra-golf-data.js"></script>
    <script src="brands/taylormade-golf-data.js"></script>
    
    <!-- Load the main script that will process and display the data -->
    <script src="script.js"></script>
</body>
</html>
