import { Component, OnInit, Output } from "@angular/core";
import { Logger, LoggerManager } from "typescript-logger";
import {
  rand,
  randLatitude,
  randLongitude,
  randNumber,
  randUuid,
  seed,
} from "@ngneat/falso";
import { AngularSplitModule } from "angular-split";
import { SncfSigMapComponent } from "../sncf-sig-map/sncf-sig-map.component";
import { NgForOf, NgIf } from "@angular/common";

export const basemaps: string[] = [
  "satellite",
  "hybrid",
  "terrain",
  "oceans",
  "osm",
  "dark-gray-vector",
  "gray-vector",
  "streets-vector",
  "topo-vector",
  "streets-night-vector",
  "streets-relief-vector",
  "streets-navigation-vector",
];
/**
 * Options globale d'un conteneur de plusieurs split.
 */
export interface IMapContainer {
  gutterSize?: number;
  width: number;
  height: number;
}

/**
 * Options d'une zone resizable et de la carte qu'elle conttine.
 */
export interface IMapCell {
  id: string;
  present: boolean;
  visible: boolean;
  size?: number;
  mapProps?: {
    basemap?: string | __esri.Basemap;
  };
  viewProps?: {
    zoom: number;
    center: number[];
  };
}

/**
 * Composant conteneur de maps, dans des splitters
 */
@Component({
  selector: "sncf-sig-map-container",
  styleUrls: ["./sncf-sig-map-container.component.css"],
  templateUrl: "./sncf-sig-map-container.component.html",
  standalone: true,
  imports: [NgForOf,NgIf, AngularSplitModule, SncfSigMapComponent]
})
export class SncfSigMapContainerComponent implements OnInit {
  private logger: Logger = LoggerManager.create("Sncf:Sig:Map:Container");

  public container: any = {
    gutterSize: "7",
    height: window.innerHeight,
    width: window.innerWidth,
  };

  public mapRows: IMapCell[][] = [[], []];

  public ngOnInit(): void {
    this.logger.debug("init maps");
    // 1ère colonne, 3 cellules, à 33%
    for (const i of [1, 2, 3]) {
      this.mapRows[0].push(this.createRandomMap(33.33, Math.random() * 100));
    }
    // 2e colonne, 2 cellules à 50% de hauteur.
    for (const i of [1, 2]) {
      this.mapRows[1].push(this.createRandomMap(50, Math.random() * 100));
    }
  }

  public handleMapLoaded(event: any): void {
    this.logger.debug("map loaded", event.mapInfo);
    return;
  }

  public createRandomMap(size: number, seedValue: number = 42): IMapCell {
    // random number generator.
    seed(`${seedValue}`);
    return {
      id: randUuid(),
      mapProps: {
        basemap: rand(basemaps),
      },
      present: true,
      size,
      viewProps: {
        center: [randLatitude(), randLongitude()],
        zoom: randNumber({ min: 1, max: 12 }),
      },
      visible: true,
    } as IMapCell;
  }
}
