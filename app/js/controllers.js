angular.module('awa.controllers', [])
    .controller('PlannedAbsenceCtrl', function($scope, PlannedAbsenceService) {
        $scope.dataset = PlannedAbsenceService;

        $scope.calculateDifferenceInDays = function(startDateText, endDateText) {
            var startDate = new Date(startDateText);
            var endDate = new Date(endDateText);

            var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

            return dayDiff > 1 ? dayDiff + ' Days' : dayDiff + ' Day'
        }
    });