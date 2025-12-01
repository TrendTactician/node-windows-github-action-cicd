terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/docker_engine"
}

resource "docker_network" "app" {
  name = "app-network"
}

resource "docker_container" "mysql" {
  name  = "mysql"
  image = "mysql:8"
  env = [
    "MYSQL_ROOT_PASSWORD=root",
    "MYSQL_DATABASE=myapp"
  ]
  ports {
    internal = 3306
    external = 3306
  }
  networks_advanced {
    name = docker_network.app.name
  }
}

resource "docker_container" "node_app" {
  name  = "node-app"
  image = "node:18-alpine"
  env = [
    "DB_HOST=mysql",
    "DB_NAME=myapp"
  ]
  ports {
    internal = 3000
    external = 3000
  }
  networks_advanced {
    name = docker_network.app.name
  }
  command = ["node", "app.js"]
}
