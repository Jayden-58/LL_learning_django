package db

// import (
// 	"fmt"
// 	"log"

// 	"gorm.io/driver/sqlite"
// 	"gorm.io/gorm"
// )

// type Publisher struct {
// 	gorm.Model
// 	Name        string
// 	DateFounded string
// }

// type Artist struct {
// 	gorm.Model
// 	FirstName string
// 	LastName  string
// 	Birthdate  string
// }

// type Album struct {
// 	gorm.Model
// 	Title             string
// 	Matrix            string
// 	ReleaseDate       string
// 	CountryOfPressing string
// 	ArtistID          uint `gorm:"index"`  // Add index for foreign key
// 	PublisherID       uint `gorm:"index"`  // Add index for foreign key
// 	Artist            Artist
// 	Publisher         Publisher
// }

// type Song struct {
// 	gorm.Model
// 	Title    string
// 	Length   string
// 	ArtistID uint
// 	AlbumID  uint
// 	Artist   Artist
// 	Album    Album
// }

// func Migrate() {
// 	// Connect to Django database (replace with your actual connection string)
// 	db, err := gorm.Open(sqlite.Open("/Users/jaydenkellar/Documents/GitHub/LL_learning_django/backend-app-Legacy/db.sqlite3"), &gorm.Config{})
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	defer func() {
// 		if sqlDB, err := db.DB(); err == nil {
// 			sqlDB.Close()
// 		}
// 	}()

// 	// Connect to SQLite database (replace with your actual SQLite connection string)
// 	sqliteDB, err := gorm.Open(sqlite.Open("/Users/jaydenkellar/Documents/GitHub/LL_learning_django/backend-app/db.sqlite3"), &gorm.Config{})
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	defer func() {
// 		if sqlDB, err := sqliteDB.DB(); err == nil {
// 			sqlDB.Close()
// 		}
// 	}()

// 	// Migrate models to SQLite database
// 	err = sqliteDB.AutoMigrate(&Publisher{}, &Artist{}, &Album{}, &Song{})
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	// Fetch data from Django models
// 	var albums []Album
// 	db.Preload("albums_artist").Preload("albums_publisher").Find(&albums)

// 	// Insert data into SQLite database
// 	for _, d := range albums {
// 		goAlbum := Album{
// 			Title:             d.Title,
// 			Matrix:            d.Matrix,
// 			ReleaseDate:       d.ReleaseDate,
// 			CountryOfPressing: d.CountryOfPressing,
// 			ArtistID:          d.ArtistID,
// 			PublisherID:       d.PublisherID,
// 			Artist:            d.Artist,
// 			Publisher:         d.Publisher,
// 		}

// 		fmt.Print(goAlbum)

// 		sqliteDB.Create(&goAlbum)
// 	}

// 	fmt.Println("Data migration complete!")
// }