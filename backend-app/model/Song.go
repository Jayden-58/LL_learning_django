package model

import "gorm.io/gorm"

type Song struct {
	gorm.Model
	Title   string `gorm:"not null"`
	Length  string
	ArtistID uint  `gorm:"not null"`
	AlbumID  uint  `gorm:"not null"`
	Artist   Artist `gorm:"foreignKey:ArtistID"`
	Album    Album  `gorm:"foreignKey:AlbumID"`
}