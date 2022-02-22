import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() title: string = 'title'
  @Input() labels: string[] = ['label'];
  @Input() data0$!: Observable<number>;
  @Input() data1$!: Observable<number>;
  data0: number = 1;
  data1: number = 1;

  /* https://github.com/valor-software/ng2-charts#readme */
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['chartlabel', ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData = [
    { data: [1], label: 'label1' },
    { data: [2], label: 'label2' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.data0$.subscribe((data0) => {
      this.data0 = data0;
    });

    this.data1$.subscribe((data1) => {
      this.data1 = data1;
      this.barChartData = [
        { data: [this.data0], label: this.labels[0] },
        { data: [this.data1], label: this.labels[1] },
      ];
      this.barChartLabels[0] = String(this.data0 + this.data1)
    });
  }
}
