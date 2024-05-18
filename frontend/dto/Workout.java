package com.example.workouttracker.dto;

import lombok.Data;

import java.util.List;

@Data
class Workout{
	int id;
	String name;
	List<Exercise> exercises;
}
