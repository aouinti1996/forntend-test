package com.springheroes.wellco.controllers;

import java.io.IOException;
import java.util.List;
import com.springheroes.wellco.enumeration.*;
import com.springheroes.wellco.entities.*;
import com.springheroes.wellco.message.ResponseMessage;
import com.springheroes.wellco.repositories.EventRepository;
import com.springheroes.wellco.repositories.OfficeRepo;
import com.springheroes.wellco.services.FileService;
import com.springheroes.wellco.services.FileUploadUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import com.springheroes.wellco.services.IEventService;
import org.springframework.web.multipart.MultipartFile;



@RestController
@RequestMapping("/Event")
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class EventController {
	
	@Autowired
	IEventService eventService;
	EventRepository eventRepository;
	OfficeRepo officeRepo;
	FileService fileService;


	//http://localhost:8089/WellCo/Event/addEvent/{idOffice}
	/*@PostMapping("/addEvent/{idOffice}")
	@ResponseBody
	public Event addEvent(@RequestBody Event e,@PathVariable("idOffice") Integer idOffice, @RequestParam("image") MultipartFile image) throws IOException {

		File savedImage = fileService.store(image);
		e.setFile(savedImage);
		return eventService.addEvent(e, idOffice);
	}*/

	//http://localhost:8089/WellCo/Event/addEvent/{idOffice}
	@PostMapping("/addEvent/{idOffice}")
	@ResponseBody
	public Event addEvent(@RequestBody Event e,@PathVariable("idOffice") Integer idOffice) {
		return eventService.addEvent(e, idOffice);
	}

	@PostMapping("/upload")
	public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
		String message = "";
		try {
			fileService.store(file);
			message = "Uploaded the file successfully: " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Could not upload the file: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}
	
	//http://localhost:8089/WellCo/Event/addOffice
	@PostMapping("/addOffice")
	@ResponseBody
	public Office addOffice(@RequestBody Office off) {
		return eventService.addOffice(off);
	}
	
	//http://localhost:8089/WellCo/Event/deleteEvent/{idEvent}
	@DeleteMapping("/deleteEvent/{idEvent}")
	@ResponseBody
	public void deleteEvent(@PathVariable("idEvent") Integer idEvent) {
		eventService.deletEvent(idEvent);
	}

	//http://localhost:8089/WellCo/Event/deleteNote/{idNote}/{idEvent}
	@DeleteMapping("/deleteNote/{idNote}/{idEvent}")
	 @ResponseBody
	 public void removeNote(@PathVariable("idNote") Integer idNote, @PathVariable("idEvent") Integer idEvent) {
		eventService.removeNote(idNote, idEvent);
	}
	//http://localhost:8089/WellCo/Event/removeLike/{idEvent}/{idUser}
	@DeleteMapping("/removeLike/{idEvent}/{idUser}")
	@ResponseBody
	public void removeLike(@PathVariable("idEvent") Integer idEvent, @PathVariable("idUser") Long idUser) {
		eventService.removeLikeEvent(idEvent, idUser);
	}
	//http://localhost:8089/WellCo/Event/uncommentEvent/{idComment}
	@DeleteMapping("/uncommentEvent/{idComment}")
	@ResponseBody
	public void uncommentEvent(@PathVariable("idComment") Integer idComment) {
		eventService.uncommentEvent(idComment);
	}

	//http://localhost:8089/WellCo/Event/unjoinEvent/{idEvent}/{idUser}
	@DeleteMapping("/unjoinEvent/{idEvent}/{idUser}")
	@ResponseBody
	public void unjoinEvent(@PathVariable("idEvent") Integer idEvent, @PathVariable("idUser") Long idUser) {
		eventService.unjoinEvent(idEvent, idUser);
	}
	
//http://localhost:8089/WellCo/Event/noteEvent/{idEvent}/{eventNote}/{idUser}
	@PutMapping("/noteEvent/{idEvent}/{eventNote}/{idUser}")
	@ResponseBody
	public void noteEvent(@PathVariable("idEvent") Integer idEvent, @PathVariable("eventNote") EventNote eventNote, @PathVariable("idUser")Long idUser){
		eventService.noteEvent(idEvent, eventNote, idUser);
	}
//http://localhost:8089/WellCo/Event/commentEvent/{idEvent}/{idUser}/{comment}
	@PutMapping("/commentEvent/{idEvent}/{idUser}/{comment}")
	@ResponseBody
	public void commentEvent(@PathVariable("idEvent") Integer idEvent, @PathVariable("idUser") Long idUser, @PathVariable("comment") String comment){
		eventService.commentEvent(idEvent, idUser, comment);
	}
	//http://localhost:8089/WellCo/Event/joinEvent/{idEvent}/{idUser}
	@PutMapping("/joinEvent/{idEvent}/{idUser}")
	@ResponseBody
	public void joinEvent(@PathVariable("idEvent") Integer idEvent,@PathVariable("idUser") Long idUser) {
		eventService.joinEvent(idEvent, idUser);
	}
	//http://localhost:8089/WellCo/Event/likeE/{idEvent}/{idUser}
	@PutMapping("/likeE/{idEvent}/{idUser}")
	@ResponseBody
	public void likeEvent(@PathVariable("idEvent") Integer idEvent, @PathVariable("idUser") Long idUser) {
		eventService.likeEvent(idEvent, idUser);
	}

	//http://localhost:8089/WellCo/Event/AddEventToFav/{idEvent}/{idUser}
	@PutMapping("/AddEventToFav/{idEvent}/{idUser}")
	@ResponseBody
	public void AddEventToFav(@PathVariable("idEvent")Integer idEvent, @PathVariable("idUser") Long idUser) {
		eventService.AddEventToFav(idEvent, idUser);
	}
	
	//http://localhost:8089/WellCo/Event/getUsersByComment/{idEvent}
	@GetMapping("/getUsersByComment/{idEvent}")
	@ResponseBody
	public List<User> getUsersByComment(@PathVariable("idEvent") Integer idEevent){
		return eventService.getUsersByComment(idEevent);
	}
	//http://localhost:8089/WellCo/Event/getUsersByLikes/{idEvent}
	@GetMapping("/getUsersByLikes/{idEvent}")
	@ResponseBody
	public List<User> getUsersByLikes(@PathVariable("idEvent") Integer idEevent){
		return eventService.getUsersByLikes(idEevent);
	}
	//http://localhost:8089/WellCo/Event/getUsersByCentreInterest/{idUser}
	@GetMapping("/getUsersByCentreInterest/{idUser}")
	@ResponseBody
	List<User> getUsersByCI(@PathVariable("idUser")Long idUser){
		return eventService.getUsersByCI(idUser);
	}
	//http://localhost:8089/WellCo/Event/listOfEvent
	@GetMapping("/listOfEvent")
	@ResponseBody
	public List<Event> listOfEvent(){
		return eventService.listOfEvent();
	}
	//http://localhost:8089/WellCo/Event/getEventsByOffice/{idOffice}
	@GetMapping("/getEventsByOffice/{idOffice}")
	@ResponseBody
	List<Event> getEventByOffice(@PathVariable("idOffice") Integer idOffice){
		return eventService.getEventByOffice(idOffice);
	}
	//http://localhost:8089/WellCo/Event/listOffice
	@GetMapping("/listOffice")
	@ResponseBody
	public List<Office> listOfOffices(){
		return eventService.getAllOffices();
	}
	
	//http://localhost:8089/WellCo/Event
	/*@PutMapping("/uploadImage")
	public String uploadImage(MultipartFile imageFile ) {
		String returnValue = "start";
		try {
			eventService.saveImage(imageFile);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("erro saving photo !", e);
			return returnValue = "error";
		}
		return returnValue;
		
	}*/

	
}
