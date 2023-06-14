import { Component, Input } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    @Input() titulo: string;
    getServerStatus() {
        return this.serverStatus
    }
}