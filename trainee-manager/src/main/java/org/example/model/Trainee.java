package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Trainee {
	
	private int empId;
	private String name;
	private String emailId;
	private String cohortCode;
	private Track track;

}
