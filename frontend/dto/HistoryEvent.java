package com.example.workouttracker.dto;

import lombok.Data;

import java.security.Timestamp;

@Data
class HistoryEvent{
	int id;
	Workout workout;
	Timestamp timestamp;
}
