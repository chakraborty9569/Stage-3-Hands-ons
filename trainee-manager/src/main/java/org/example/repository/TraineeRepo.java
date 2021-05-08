package org.example.repository;

import org.example.exceptions.InvalidTraineeOperationException;
import org.example.model.Trainee;

public interface TraineeRepo {
	
	public void registerTrainee(Trainee trainee) throws InvalidTraineeOperationException;
	public void removeTrainee(int empId);

}
