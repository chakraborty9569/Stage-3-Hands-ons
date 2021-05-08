package org.example.exceptions;

public class InvalidTraineeOperationException extends Exception{
	private static final long serialVersionUID = 1L;
	public InvalidTraineeOperationException(String message) {
		super(message);
	}

}
