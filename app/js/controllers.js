angular.module('awa.controllers', [])
    .controller('PlannedAbsenceCtrl', function($scope, PlannedAbsenceService) {

        $scope.dataset = PlannedAbsenceService;

        for(var i=0;i<$scope.dataset.length;++i) {

            var startDateText = $scope.dataset[i].leave_start_date.replace(/\-/g, '\/').replace(/[T|Z]/g, ' ');
            var endDateText = $scope.dataset[i].leave_end_date.replace(/\-/g, '\/').replace(/[T|Z]/g, ' ');

            var startDate = new Date(startDateText);
            var endDate = new Date(endDateText);

            var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

            $scope.dataset[i].leave_days = dayDiff;
        }

        $scope.isFmla = function(reason) {
             return reason.fmla_status == 'Y' || reason.fmla_status == 'y' ? 'FMLA' : reason.leave_reason;
        }

        $scope.isDays = function(days) {
            return days > 1 ? days + ' Days' : days + ' Day';
        }
    });