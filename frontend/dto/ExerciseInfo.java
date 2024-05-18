package com.example.workouttracker.dto;

import lombok.Data;

@Data
public class ExerciseInfo {
    int id;
    String name;
    String description;
    String image_src;
}
