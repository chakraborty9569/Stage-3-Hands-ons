package org.example;

import java.util.Scanner;

import org.example.dao.TraineeDaoImpl;
import org.example.exceptions.InvalidTraineeDataException;
import org.example.exceptions.InvalidTraineeOperationException;
import org.example.model.Track;
import org.example.model.Trainee;
import org.example.repository.TraineeRepoImpl;
import org.example.util.Validator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		log.info("Start");
		SpringApplication.run(Application.class, args);
		Scanner sc = new Scanner(System.in);
		log.info("Trainee Manager");
		TraineeRepoImpl traineeRepoImpl = new TraineeRepoImpl();
		while(true) {
			log.info("1. Register Trainee");
			log.info("2. Remove Trainee");
			log.info("3. Find Trainee by Name");
			log.info("4. Find all Trainees");
			log.info("5. Exit");
			int choice = sc.nextInt();
			switch(choice) {
			case 1: {
				registerTrainee(traineeRepoImpl);
				break;
			}
			case 2: {
				removeTrainee(traineeRepoImpl);
				break;
			}
			case 3: {
				findTraineeByName(traineeRepoImpl);
				break;
			}
			case 4: {
				findAllTrainees(traineeRepoImpl);
				break;
			}
			case 5: {
				break;
			}
			default: {
				log.info("Wrong choice !!!");
			}
			}
			if(choice==5) {
				break;
			}
		}
		log.info("End");
	}

	private static void registerTrainee(TraineeRepoImpl traineeRepoImpl) {
		Scanner sc = new Scanner(System.in);
		log.info("Enter employee id:");
		int empId=sc.nextInt();
		log.info("Enter name:");
		String name=sc.next();
		log.info("Enter email id:");
		String emailId=sc.next();
		log.info("Enter cohort code:");
		String cohortCode=sc.next();
		log.info("Enter Track:");
		log.info("1. JAVA");
		log.info("2. AWS");
		log.info("3. SALESFORCE");
		log.info("4. DOTNET");
		log.info("5. FULLSTACK");
		String track=sc.next().toUpperCase();
		
		Validator validator = new Validator();
		try {
			validator.validateEmpId(empId);
			validator.validateName(name);
			validator.validateEmail(emailId);
			validator.validateCohortCode(cohortCode);
			Trainee trainee = new Trainee(empId, name, emailId, cohortCode, Track.valueOf(track));
			traineeRepoImpl.registerTrainee(trainee);
		}catch(InvalidTraineeDataException | InvalidTraineeOperationException e) {
			log.error("Error: {}", e);
		}
	}
	
	private static void removeTrainee(TraineeRepoImpl traineeRepoImpl) {
		Scanner sc = new Scanner(System.in);
		log.info("Enter empId of Employee to be removed:");
		int empId=sc.nextInt();
		traineeRepoImpl.removeTrainee(empId);
	}

	private static void findTraineeByName(TraineeRepoImpl traineeRepoImpl) {
		Scanner sc = new Scanner(System.in);
		log.info("Enter name to be searched");
		String name=sc.next();
		TraineeDaoImpl traineeDaoImpl = new TraineeDaoImpl();
		traineeDaoImpl.findByName(traineeRepoImpl, name);
	}

	private static void findAllTrainees(TraineeRepoImpl traineeRepoImpl) {
		TraineeDaoImpl traineeDaoImpl = new TraineeDaoImpl();
		traineeDaoImpl.findAllTrainee(traineeRepoImpl);
	}

}
