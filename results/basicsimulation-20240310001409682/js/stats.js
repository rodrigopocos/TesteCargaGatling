var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "percentiles1": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "percentiles2": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "percentiles3": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "percentiles4": {
        "total": "598",
        "ok": "598",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.182",
        "ok": "0.182",
        "ko": "-"
    }
},
contents: {
"req_get-usuarios-e29a4": {
        type: "REQUEST",
        name: "GET_usuarios",
path: "GET_usuarios",
pathFormatted: "req_get-usuarios-e29a4",
stats: {
    "name": "GET_usuarios",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "percentiles2": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "percentiles3": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "percentiles4": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.091",
        "ok": "0.091",
        "ko": "-"
    }
}
    },"req_get-produtos-14e4a": {
        type: "REQUEST",
        name: "GET_produtos",
path: "GET_produtos",
pathFormatted: "req_get-produtos-14e4a",
stats: {
    "name": "GET_produtos",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles2": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles3": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles4": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.091",
        "ok": "0.091",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
