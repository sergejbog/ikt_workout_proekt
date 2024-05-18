package com.example.workouttracker.dto;

import lombok.Data;

import java.util.List;

@Data
class Exercise{
	String name;
	List<WorkoutSet> sets;
}
