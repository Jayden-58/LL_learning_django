package db

import (
	"fmt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"backend/model"
)

var DB *gorm.DB

// Init initializes the database connection
func Init() {
	var err error
	DB, err = gorm.Open(sqlite.Open("/Users/jaydenkellar/Documents/GitHub/LL_learning_django/backend-app(Legacy)/db.sqlite3"), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	// AutoMigrate all models
	DB.AutoMigrate(&model.Artist{}, &model.Album{}, &model.Publisher{}, &model.Song{})

	fmt.Println("Connected to the SQLite database")
}

// Close closes the database connection
func Close() {
	sqlDB, err := DB.DB()
	if err != nil {
		panic(err)
	}
	sqlDB.Close()
}