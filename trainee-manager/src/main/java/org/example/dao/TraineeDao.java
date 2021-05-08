package org.example.dao;

import org.example.repository.TraineeRepoImpl;

public interface TraineeDao {
	
	public void findByName(TraineeRepoImpl traineeRepoImpl, String name);
	public void findAllTrainee(TraineeRepoImpl traineeRepoImpl);

}
