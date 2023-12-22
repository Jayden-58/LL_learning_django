package model

import "gorm.io/gorm"

type Publisher struct {
	gorm.Model
	Name        string `gorm:"not null"`
	DateFounded string
}