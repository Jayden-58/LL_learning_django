package model

import (
	"gorm.io/gorm"
)

type Album struct {
	gorm.Model
	Title             string `gorm:"not null"`
	Matrix            string
	ReleaseDate       string
	CountryOfPressing string
	ArtistID          uint
	PublisherID       uint
	Artist            Artist `gorm:"foreignKey:ArtistID"`
	Publisher         Publisher `gorm:"foreignKey:PublisherID"`
}