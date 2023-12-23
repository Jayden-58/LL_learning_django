package model

import (
	"gorm.io/gorm"
)

type Artist struct {
	gorm.Model
	FirstName string `gorm:"not null"`
	LastName  string
}