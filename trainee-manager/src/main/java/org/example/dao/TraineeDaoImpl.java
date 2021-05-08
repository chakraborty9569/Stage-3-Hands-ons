package org.example.dao;

import java.util.List;

import org.example.model.Trainee;
import org.example.repository.TraineeRepoImpl;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TraineeDaoImpl implements TraineeDao {
	
	@Override
	public void findByName(TraineeRepoImpl traineeRepoImpl, String name) {
		log.info("Start");
		List<Trainee> traineeList = traineeRepoImpl.getTraineeList();
		for(Trainee t: traineeList) {
			if(t.getName().equalsIgnoreCase(name)) {
				log.debug("Trainee: {}", t);
				log.info("End");
				return;
			}
		}
		log.info("No such Trainee present");
		log.info("End");
	}

	@Override
	public void findAllTrainee(TraineeRepoImpl traineeRepoImpl) {
		log.info("Start");
		List<Trainee> traineeList = traineeRepoImpl.getTraineeList();
		if(traineeList.isEmpty()) {
			log.info("No Trainees registered so far");
		}
		else {
			log.debug("Trainees List: {}", traineeList);
		}
		log.info("End");
	}

}
