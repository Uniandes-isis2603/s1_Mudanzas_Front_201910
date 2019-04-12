import { Component, OnInit, Input } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { ConductorDetail } from '../conductor-detail';
import { ActivatedRoute } from '@angular/router';
import { Conductor } from '../conductor';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {

  proveedor_login: string;
  conductor_Id: number;
  conductorDetail: ConductorDetail;
  constructor(private conductorService: ConductorService,
    private route: ActivatedRoute, ) { }

  getConductorDetail(): void {
    this.conductorService.getConductorDetail(this.proveedor_login, this.conductor_Id)
      .subscribe(conductorDetail => {
        this.conductorDetail = conductorDetail;
      });
  }
  ngOnInit() {
    this.conductor_Id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.proveedor_login=this.route.snapshot.paramMap.get('login');
    console.log(this.proveedor_login);
    console.log(this.conductor_Id);
    this.conductorDetail = new ConductorDetail();
    this.getConductorDetail();
  }
}


