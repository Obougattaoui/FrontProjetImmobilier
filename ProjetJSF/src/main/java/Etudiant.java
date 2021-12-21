import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean
@SessionScoped
public class Etudiant implements Serializable{
	private int cne;
	private String nom;
	private String prenom;
	private String ville;
	private Date dateN;
	private double bourse;
	private List<Etudiant> etudiants = new ArrayList<Etudiant>();
	public Etudiant() {
		super();
	}
	public Etudiant(int cne, String nom, String prenom, String ville, Date dateN, double bourse) {
		super();
		this.cne = cne;
		this.nom = nom;
		this.prenom = prenom;
		this.ville = ville;
		this.dateN = dateN;
		this.bourse = bourse;
	}
	public String ajouter() {
		Etudiant e = new Etudiant(this.cne, this.nom, this.prenom, this.ville, this.dateN, this.bourse);
		etudiants.add(e);
		return "affichage";
	}
	public int getCne() {
		return cne;
	}
	public void setCne(int cne) {
		this.cne = cne;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public Date getDateN() {
		return dateN;
	}
	public void setDateN(Date dateN) {
		this.dateN = dateN;
	}
	public double getBourse() {
		return bourse;
	}
	public void setBourse(double bourse) {
		this.bourse = bourse;
	}
	public List<Etudiant> getEtudiants() {
		return etudiants;
	}
	public void setEtudiants(List<Etudiant> etudiants) {
		this.etudiants = etudiants;
	}
	
}
