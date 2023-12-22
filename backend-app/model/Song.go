package model

import "gorm.io/gorm"

type Song struct {
	gorm.Model
	Title   string `gorm:"not null"`
	Length  string
	ArtistID uint
	AlbumID  uint
	Artist   Artist `gorm:"foreignKey:ArtistID"`
	Album    Album  `gorm:"foreignKey:AlbumID"`
}