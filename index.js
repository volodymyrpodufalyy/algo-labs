class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    this.res = [];
    for (let i = 0; i < v; ++i) this.adj[i] = [];

    this.Time = 0;
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  SCCUtil(u, low, disc, stackMember, st) {
    disc[u] = this.Time;
    low[u] = this.Time;
    this.Time += 1;
    stackMember[u] = true;
    st.push(u);

    let n;

    for (let i of this.adj[u]) {
      n = i;

      if (disc[n] == -1) {
        this.SCCUtil(n, low, disc, stackMember, st);

        low[u] = Math.min(low[u], low[n]);
      } else if (stackMember[n] == true) {
        low[u] = Math.min(low[u], disc[n]);
      }
    }
    let sccEntities = [];

    let w = -1;
    if (low[u] == disc[u]) {
      while (w != u) {
        w = st.pop();
        console.log(w + " ");
        sccEntities.push(w);
        stackMember[w] = false;
      }
      console.log("///");
      this.res.push(sccEntities);
    }
  }

  SCC() {
    let disc = new Array(this.V);
    let low = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
      disc[i] = -1;
      low[i] = -1;
    }

    let stackMember = new Array(this.V);
    let st = [];

    for (let i = 0; i < this.V; i++) {
      if (disc[i] == -1) this.SCCUtil(i, low, disc, stackMember, st);
    }
    return this.res;
  }
}

let graph = new Graph(5);

graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(3, 4);
console.log("SSC in first graph");
graph.SCC();

module.exports = {Graph};