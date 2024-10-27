<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Applet 6 - Todo List</title>
    <style>
        .applet-container{
            margin-top: 1rem;
            margin-left: 2rem;
        }
         .completed{
            text-decoration: line-through;
            color: gray;
        }

    </style>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Apps
            </a>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="applet-1.html">Applet 1 - Basic Events </a></li>
              <li><a class="dropdown-item" href="applet-2.html">Applet 2 - leaflet Map </a></li>
              <li><a class="dropdown-item" href="applet-3.html">Applet 3 - Button Logger </a></li>
  
            </ul>
      </div>
    </div>
  </nav>
  <body>
  
  <div class="input-group input-group-lg applet-searchbar mb-4">
      <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Type to search...">
  </div>
  </nav>