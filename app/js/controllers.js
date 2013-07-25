angular.module('awa.controllers', [])
    .controller('PlannedAbsenceCtrl', function($scope, PlannedAbsenceService) {
        $scope.dataset = PlannedAbsenceService;

        $scope.calculateDifferenceInDays = function(startDateText, endDateText) {
            var startDate = new Date(startDateText.replace(/\-/g,'\/').replace(/[T|Z]/g,' '));
            var endDate = new Date(endDateText.replace(/\-/g,'\/').replace(/[T|Z]/g,' '));



            var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

            return dayDiff > 1 ? dayDiff + ' Days' : dayDiff + ' Day';
        }

        $scope.isFmla = function(reason) {
             return reason.fmla_status == 'Y' || reason.fmla_status == 'y' ? 'FMLA' : reason.leave_reason;
        }
    });