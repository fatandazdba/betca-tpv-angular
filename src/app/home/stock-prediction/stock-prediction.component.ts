import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleWithCodeAndDescriptionDto} from './model/article-with-code-and-description-dto.model';
import {StockPredictionService} from './stock-prediction.service';
import {PeriodicityType} from './model/periodicity-type.enum';
import {StockPredictionOutputDto} from './model/stock-prediction-output-dto.model';
import {StockPredictionInputDto} from './model/stock-prediction-input-dto.model';

@Component({
  selector: 'app-stock-prediction',
  templateUrl: './stock-prediction.component.html',
  styleUrls: ['./stock-prediction.component.css']
})
export class StockPredictionComponent implements OnInit {
  static URL = 'stock-prediction';
  stockPredictionForm: FormGroup;
  periodicityTypeList: PeriodicityType[] = [PeriodicityType.WEEKLY, PeriodicityType.MONTHLY, PeriodicityType.YEARLY];
  periodsNumberList: number[] = this.weeklyPeriodsNumberList();
  articleList: ArticleWithCodeAndDescriptionDto[];
  stockPredictionTableTitle = 'Stock Prediction';
  stockPredictionTableColumns: string[] = ['period', 'periodNumber', 'stock'];
  stockPredictionTableData: StockPredictionOutputDto[];

  constructor(private formBuilder: FormBuilder, private stockPredictionService: StockPredictionService) {
  }

  get articleFormControl() {
    return this.stockPredictionForm.get('articleFormControl');
  }

  get periodicityTypeFormControl() {
    return this.stockPredictionForm.get('periodicityTypeFormControl');
  }

  get periodsNumberFormControl() {
    return this.stockPredictionForm.get('periodsNumberFormControl');
  }

  ngOnInit() {
    this.stockPredictionForm = this.formBuilder.group({
        articleFormControl: ['', [Validators.required]],
        periodicityTypeFormControl: ['', [Validators.required]],
        periodsNumberFormControl: ['', [Validators.required]]
      }
    );
    this.periodicityTypeFormControl.setValue(PeriodicityType.WEEKLY);
    this.periodsNumberFormControl.setValue(1);
    this.stockPredictionService.readAllArticleWithCodeAndDescriptionDto().subscribe(
      articleList => this.articleList = articleList
    );
  }

  onSubmit() {
    const stockPredictionInputDto: StockPredictionInputDto = {
      articleCode: this.articleFormControl.value,
      periodicityType: this.periodicityTypeFormControl.value,
      periodsNumber: this.periodsNumberFormControl.value
    };
    console.log(`onSubmit values`);
    console.dir(stockPredictionInputDto);
    this.stockPredictionService.calculate(stockPredictionInputDto).subscribe(
      stockPredictionOutputArray => this.stockPredictionTableData = stockPredictionOutputArray
    );
  }

  onChangePeriodicityType() {
    const periodicityType = this.periodicityTypeFormControl.value;
    console.log('onChangePeriodicityType -> value: ' + periodicityType);
    if (PeriodicityType.WEEKLY === periodicityType) {
      this.periodsNumberList = this.weeklyPeriodsNumberList();
    } else if (PeriodicityType.MONTHLY === periodicityType) {
      this.periodsNumberList = this.monthlyPeriodsNumberList();
    } else if (PeriodicityType.YEARLY === periodicityType) {
      this.periodsNumberList = this.annualPeriodsNumberList();
    } else {
      console.log('No Action for PeriodicityType: ' + periodicityType);
    }
    this.periodsNumberFormControl.setValue(1);
  }

  private weeklyPeriodsNumberList(): number[] {
    return this.range(1, 26, 1);
  }

  private monthlyPeriodsNumberList(): number[] {
    return this.range(1, 12, 1);
  }

  private annualPeriodsNumberList(): number[] {
    return this.range(1, 2, 1);
  }

  private range(start: number, stop: number, step: number): number[] {
    return Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  }
}