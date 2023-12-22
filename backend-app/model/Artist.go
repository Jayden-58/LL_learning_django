package model

import (
	"gorm.io/gorm"
	"time"
)

type Artist struct {
	gorm.Model
	FirstName string `gorm:"not null"`
	LastName  string
	Birthdate *time.Time
}