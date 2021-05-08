package org.example.exceptions;

public class InvalidTraineeDataException extends Exception{
	private static final long serialVersionUID = 1L;
	public InvalidTraineeDataException(String message) {
		super(message);
	}

}
