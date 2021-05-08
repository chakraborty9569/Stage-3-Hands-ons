package org.example.repository;

import java.util.List;
import java.util.ArrayList;

import org.example.exceptions.InvalidTraineeOperationException;
import org.example.model.Trainee;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class TraineeRepoImpl implements TraineeRepo {
	
	private List<Trainee> traineeList = new ArrayList<>();

	@Override
	public void registerTrainee(Trainee trainee) throws InvalidTraineeOperationException {
		log.info("Start");
		if(traineeList.contains(trainee)) {
			log.info("End");
			throw new InvalidTraineeOperationException("A trainee cannot be added in more than one cohort");
		}
		else {
			traineeList.add(trainee);
			log.info("Trainee registered successfully");
			log.info("End");
		}
	}

	@Override
	public void removeTrainee(int empId) {
		log.info("Start");
		for(Trainee t: traineeList) {
			if(t.getEmpId()==empId) {
				traineeList.remove(t);
				log.info("Trainee unregistered successfully");
				log.info("End");
				return;
			}
		}
		log.info("No such Trainee found");
		log.info("End");
	}

}
