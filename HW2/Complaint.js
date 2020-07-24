module.exports = class Complaint {
    constructor(client, worker, complaintmsg) {
      this.client = client;
      this.worker = worker;
      this.complaintmsg = complaintmsg;
    }
  }