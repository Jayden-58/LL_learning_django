package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Message struct {
	Text string `json:"text"`
}

func main() {
	// Create an Echo instance
	e := echo.New()

	// Define CORS middleware with default options

	// Use CORS middleware with Echo
	e.Use(middleware.CORS())

	// Define route handlers
	e.GET("/", homeHandler)
	e.GET("/api/message", messageHandler)

	// Start the Echo server
	port := 8090
	fmt.Printf("Server listening on port %d...\n", port)
	e.Start(fmt.Sprintf(":%d", port))
}

func homeHandler(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, this is the home page!")
}

func messageHandler(c echo.Context) error {
	message := Message{Text: "Hello from the API!"}

	// Set the response Content-Type to application/json
	c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSON)

	return c.JSON(http.StatusOK, message)
}