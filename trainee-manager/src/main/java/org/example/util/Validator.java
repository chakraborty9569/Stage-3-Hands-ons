package org.example.util;

import org.example.exceptions.InvalidTraineeDataException;

public class Validator {
	
	static final String MESSAGE = "Please enter data according to correct format";
	
	public void validateEmail(String emailId) throws InvalidTraineeDataException {
		String emailPattern = "^[\\w\\d._-]+@[\\w\\d.-]+(\\.[\\w]{2,3}){1,2}$";
		if(!emailId.matches(emailPattern)) {
			throw new InvalidTraineeDataException(MESSAGE);
		}
	}
	
	public void validateName(String name) throws InvalidTraineeDataException {
		String namePattern = "^[A-Z][A-Za-z]*$";
		if(!name.matches(namePattern)) {
			throw new InvalidTraineeDataException(MESSAGE);
		}
	}
	
	public void validateEmpId(int empId) throws InvalidTraineeDataException {
		String empIdPattern = "^[0-9]{6}$";
		if(!String.valueOf(empId).matches(empIdPattern)) {
			throw new InvalidTraineeDataException(MESSAGE);
		}
	}
	
	public void validateCohortCode(String cohortCode) throws InvalidTraineeDataException {
		String cohortCodePattern = "^[A]{3}[0-9]{2}[A]{2}[0-9]{2}$";
		if(!cohortCode.matches(cohortCodePattern)) {
			throw new InvalidTraineeDataException(MESSAGE);
		}
	}

}
