package main

import (
	"fmt"
	"net/http"
	"backend/db"
	"backend/model"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Initialize the database connection
	db.Init()
	defer db.Close()

	// Create an Echo instance
	e := echo.New()

	// Use CORS middleware with Echo
	e.Use(middleware.CORS())

	// Define route handlers
	e.GET("/", homeHandler)
	e.GET("/api/first-album", firstAlbumHandler)

	// Start the Echo server
	port := 8090
	fmt.Printf("Server listening on port %d...\n", port)
	e.Start(fmt.Sprintf(":%d", port))
}

func homeHandler(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, this is the home page!")
}

func firstAlbumHandler(c echo.Context) error {
	// Fetch the first album from the database
	var firstAlbum model.Album
	if err := db.DB.Unscoped().Table("albums_album").First(&firstAlbum).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to fetch the first album"})
	}

	// Set the response Content-Type to application/json
	c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSON)

	return c.JSON(http.StatusOK, firstAlbum)
}