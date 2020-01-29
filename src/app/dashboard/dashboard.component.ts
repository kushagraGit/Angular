import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients=["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];

    this.Projects=["Project A", "Project B", "Project C", "Project D"];

    for(var i = 2019; i >= 2010; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      {Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
      {Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1},
      {Region: "North", TeamMembersCount: 25, TemporarilyUnavailableMembers: 6}
    ];

    this.TeamMembers=[
      {
        Region: "East", Members: [
          {ID:1, Name: "Ford", Status: "Available"},
          {ID:1, Name: "Miller", Status: "Available"},
          {ID:1, Name: "Jones", Status: "Busy"},
          {ID:1, Name: "James", Status: "Busy"}
        ]
      },
      {
        Region: "West", Members: [
          {ID:1, Name: "Ford", Status: "Available"},
          {ID:1, Name: "Miller", Status: "Busy"},
          {ID:1, Name: "Jones", Status: "Busy"},
          {ID:1, Name: "James", Status: "Busy"}
        ]
      },
      {
        Region: "South", Members: [
          {ID:1, Name: "Ford", Status: "Busy"},
          {ID:1, Name: "Miller", Status: "Available"},
          {ID:1, Name: "Jones", Status: "Busy"},
          {ID:1, Name: "James", Status: "Busy"}
        ]
      },
      {
        Region: "North", Members: [
          {ID:1, Name: "Ford", Status: "Available"},
          {ID:1, Name: "Miller", Status: "Available"},
          {ID:1, Name: "Jones", Status: "Available"},
          {ID:1, Name: "James", Status: "Busy"}
        ]
      },
    ];

  }

  
  onProjectChange($event){
    if($event.target.innerHTML == 'Project A'){
      this.ProjectCost = 218357;
      this.CurrentExpenditure = 886788;
      this.AvailableFunds = 99536;
    }else if($event.target.innerHTML == 'Project B'){
      this.ProjectCost = 789654;
      this.CurrentExpenditure = 852369;
      this.AvailableFunds = 78632;
    }else if($event.target.innerHTML == 'Project C'){
      this.ProjectCost = 219987;
      this.CurrentExpenditure = 286792;
      this.AvailableFunds = 99586;
    }else if($event.target.innerHTML == 'Project D'){
      this.ProjectCost = 985632;
      this.CurrentExpenditure = 784521;
      this.AvailableFunds = 85236;
    }
  }

}
